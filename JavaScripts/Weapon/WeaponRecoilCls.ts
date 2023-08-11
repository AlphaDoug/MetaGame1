import { WeaponAccessoryBaseCls } from "./WeaponAccessoryBaseCls"
import { WeaponBaseCls } from "./WeaponBaseCls"
type RateStruct = {
    Move:number
    Crouch:number
}
export class WeaponRecoilCls{
    private id : number
    private gun : WeaponBaseCls
    private _verticalScale: number = 1
    private _horizontalScale: number = 1
    private _minErrorScale: number = 1
    private _maxErrorScale: number = 1
    private _recoverRateScale: number = 1
    private _selfSpinRangeRateScale: number = 1
    
    private _unstability: number = 0
    private _currentError: number = 0

    private _horizontalRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>
    private _verticalRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>
    private _minErrorRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>
    private _maxErrorRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>
    private _recoverRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>
    private _selfSpinRangeRateTable: Map<GameConst.WeaponAccessoryTypeEnum|string, number>

    private _lastPos : Vector
    private _configData : GameConst.WeaponRecoilConfigData

    difFunction(_unstability:number) {
        _unstability = _unstability || this._unstability
        if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Linear) {
            // Linear function
            return _unstability
        } else if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Sqrt) {
            return Math.sqrt(_unstability)
        } else if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Square) {
            return _unstability * _unstability
        }
    }
    Update(_dt: number): void {
        // Decrease recoil
        this._unstability = Math.min(
            this._unstability - this._configData.diffuseRecoverRate * _dt,
            0,
            1
        )

        // Reset influence factors
        this._horizontalRateTable.clear()
        this._verticalRateTable.clear()
        this._minErrorRateTable.clear()
        this._maxErrorRateTable.clear()
        this._recoverRateTable.clear()
        this._selfSpinRangeRateTable.clear()

        // Check Movement and jumping
        const curPos = this.gun.character.getWorldLocation()
        if (
            curPos.subtract(this._lastPos).magnitude > 0.5 * _dt ||
            this.gun.character.isJumping
        ) {
            this._minErrorRateTable.set('Move', this._configData.jumpErrorScale)
            this._maxErrorRateTable.set('Move', this._configData.jumpErrorScale)
        } else {
            this._minErrorRateTable.delete('Move')
            this._maxErrorRateTable.delete('Move')
        }
        this._lastPos = curPos

        // Check crouching
        if (this.gun.character.crouch) {
            this._minErrorRateTable.set('Crouch', this._configData.crouchErrorScale)
            this._maxErrorRateTable.set('Crouch', this._configData.crouchErrorScale)
        } else {
            this._minErrorRateTable.delete('Crouch')
            this._maxErrorRateTable.delete('Crouch')
        }

        for (const [k, v] of Object.entries(this.gun._weaponAccessoryList)) {
            this._horizontalRateTable.set(k, v.horizontalJumpRangeRate)
            this._verticalRateTable.set(k, v.verticalJumpAngleRate)
            this._minErrorRateTable.set(k, v.minErrorRate)
            this._maxErrorRateTable.set(k, v.maxErrorRate)
            this._recoverRateTable.set(k, v.gunRecoverRate)
            this._selfSpinRangeRateTable.set(k, v.selfSpinRangeRate)
        }

        // Calculate error
        this.gun.error = this.GetDiffuse(_dt)

        // Update influence factor magnitudes
        this.RefreshScales()
    }
    RefreshScales() {
        throw new Error("Method not implemented.")
    }
    GetDiffuse(_dt: number): number {
        throw new Error("Method not implemented.")
    }

}
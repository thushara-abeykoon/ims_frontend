import { AssetRequest, AssetResponse } from "../../common/Asset"
import { Employee } from "../Employee"

type MobileAsset = {
    employee: Employee,
    warrantyExpireDate: number,
    purchaseDate: number,
    invoiceNumber: string
}

export interface MobileAssetRequest extends AssetRequest, MobileAsset {

}

export interface MobileAssetResponse extends AssetResponse, MobileAsset {

}
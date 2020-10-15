export interface item{
    id: string;
    foto: string;
    jenis: string;
    merek: string;
    model: string;
    harga: number;
    stok: number;
    base?: number;
    boost?: number;
    core?: number;
    thread?: number;
    speed?: number;
    ukuran?: number;
    chipset?: string;
    targetprocessor?: string;
}
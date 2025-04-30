"use client";

import { useEffect, useState } from "react";
import { useScannerResult } from "./hook/use-scanner-result";
import { useRouter } from "next/navigation";
import { QrCodeIcon } from "lucide-react";

export default function Home() {
	const { scannerResult } = useScannerResult();
	const [data, setData] = useState<string>("");
	const router = useRouter();

	useEffect(() => {
		if (scannerResult) {
			setData(scannerResult);
		}
	}, [scannerResult]);

	function handleScan() {
		router.push("/qr-code");
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<form className="flex flex-col justify-center items-center w-80 p-8">
				<div>
					<label htmlFor="codigo" className="font-semibold text-xl">
						Produto
					</label>
					<input
						id="codigo"
						type="text"
						value={data}
						onChange={(e) => setData(e.target.value)}
						placeholder="Código do produto"
						className="p-2 border border-gray-300 rounded mb-4 w-80"
					/>
				</div>

				<button
					type="button"
					onClick={handleScan}
					className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600 hover:cursor-pointer">
					<QrCodeIcon /> Escanear QR Code{" "}
				</button>
			</form>
		</div>
	);
}

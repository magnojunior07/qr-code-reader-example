"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { useScannerResult } from "../hook/use-scanner-result";
import { useRouter } from "next/navigation";

export default function QrCodePage() {
	const { setScannerResult } = useScannerResult();
	const router = useRouter();

	return (
		<div className="w-full p-8">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-2xl font-bold p-4">Escanear</h1>
				<Scanner
					formats={[
						"qr_code",
						"micro_qr_code",
						"rm_qr_code",
						"maxi_code",
						"pdf417",
						"aztec",
						"data_matrix",
						"matrix_codes",
						"dx_film_edge",
						"databar",
						"databar_expanded",
						"codabar",
						"code_39",
						"code_93",
						"code_128",
						"ean_8",
						"ean_13",
						"itf",
						"linear_codes",
						"upc_a",
						"upc_e",
					]}
					constraints={{
						facingMode: "environment",
					}}
					onScan={(detectedCodes) => {
						setScannerResult(detectedCodes[0].rawValue);
						router.push("/");
					}}
					onError={(error) => {
						console.log(`onError: ${error}'`);
					}}
					styles={{ container: { height: "500px", width: "500px" } }}
					components={{
						audio: true,
						onOff: false,
						torch: true,
						zoom: true,
						finder: false,
					}}
					allowMultiple={false}
					scanDelay={2000}
				/>
			</div>
		</div>
	);
}

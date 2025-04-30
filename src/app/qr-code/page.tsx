"use client";

import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { useScannerResult } from "../hook/use-scanner-result";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QrCodePage() {
	const { setScannerResult } = useScannerResult();
	const router = useRouter();

	const devices = useDevices();
	const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
	return (
		<div className="w-full p-8">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-2xl font-bold p-4">Escanear</h1>
				<select className="py-4" onChange={(e) => setDeviceId(e.target.value)}>
					<option className="bg-background text-foreground" value={undefined}>
						Selecionar câmera
					</option>
					{devices.map((device, index) => (
						<option
							className="bg-background text-foreground"
							key={index}
							value={device.deviceId}>
							{device.label}
						</option>
					))}
				</select>
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
						facingMode: { exact: "user" },
						deviceId: deviceId,
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
						onOff: true,
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

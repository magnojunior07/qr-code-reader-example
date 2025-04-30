import { atom, useAtom } from "jotai";

const resultAtom = atom<string>("");

export function useScannerResult() {
	const [scannerResult, setScannerResult] = useAtom(resultAtom);

	return {
		scannerResult,
		setScannerResult,
	};
}

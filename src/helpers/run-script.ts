import { spawn } from 'child_process';
import path from 'path';
import { getScriptRoot } from './util';

export const runSudoScript = (script: string, ...args: string[]): Promise<{ stderr: string; stdout: string }> => {
	const scriptRoot = getScriptRoot();
	return new Promise((resolve, reject) => {
		const child = spawn(`sudo ${path.join(scriptRoot, script)}`, args);
		let stdout = '';
		let stderr = '';
		child.stdout.on('data', (data) => {
			stdout += data;
		});
		child.stderr.on('data', (data) => {
			stderr += data;
		});
		child.on('close', (code) => {
			if (code === 0) {
				resolve({ stderr, stdout });
			} else {
				reject(stderr);
			}
		});
	});
};

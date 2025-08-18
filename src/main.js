import core from '@actions/core';
import tc from '@actions/tool-cache';

async function main() {
  try {
    const okapi = 'okapi-framework';
    const version = core.getInput('version', {
      required: true,
    });
    const cacheToolPath = tc.find(okapi, version);

    if (cacheToolPath) {
      core.addPath(cacheToolPath);
      core.setOutput('path', cacheToolPath);
      return;
    }

    const fileName = `okapi-lib_all-platforms_${version}.zip`;

    const downloadUrl =
      'https://okapiframework.org/binaries/main/' + version + '/' + fileName;
    core.info(`Downloading ${downloadUrl}`);

    const downloadPath = await tc.downloadTool(downloadUrl);
    const extractPath = await tc.extractZip(downloadPath);
    const toolPath = await tc.cacheDir(extractPath, okapi, version);

    core.addPath(toolPath);
    core.setOutput('path', toolPath);
  } catch (error) {
    core.setFailed(error);
  }
}

main();

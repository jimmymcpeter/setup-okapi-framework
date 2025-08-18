# setup-okapi-framework

This GitHub Action will download, install, and cache the
[Okapi Framework](https://okapiframework.org/).

You will need to manage the Java version setup in the `JAVA_HOME` environment variable on your runner.  The `windows-2022` runner uses Java 8 as its default and Okapi requires Java 11.  An example is provided below showing you how to change it.  You can lookup the Java versions available and the default set at the respective [actions/runner-images](https://github.com/actions/runner-images) readme.

## Usage

See [action.yml](action.yml)

```yaml
uses: jimmymcpeter/setup-okapi-framework@v1
with:
  version: '1.47.0'
```

**Ubuntu**

```yaml
runs-on: ubuntu-22.04
steps:
  - name: Setup Okapi Framework
    uses: jimmymcpeter/setup-okapi-framework@v1
    with:
      version: '1.47.0'

  - name: Use Okapi Framework
    run: |
      tikal.sh -x *.htm
```

**Windows**

```yaml
runs-on: windows-2022
steps:
  - name: Setup Okapi Framework
    uses: jimmymcpeter/setup-okapi-framework@v1
    with:
      version: '1.47.0'

  - name: Setup Java 11
    run: |
      echo "JAVA_HOME=$Env:JAVA_HOME_11_X64" >> $Env:GITHUB_ENV

  - name: Use Okapi Framework
    run: |
      tikal.bat -x *.htm
```
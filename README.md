# setup-okapi-framework

This GitHub Action will download, install, and cache the
[Okapi Framework](https://okapiframework.org/).

## Usage

See [action.yml](action.yml)

```yaml
uses: jimmymcpeter/setup-okapi-framework@v1
with:
  version: '1.47.0'
```

**Basic:**

```yaml
- name: Setup Okapi Framework
  uses: jimmymcpeter/setup-okapi-framework@v1
  with:
    version: '1.47.0'

- name: Use Okapi Framework
  shell: bash
  run: |
    tikal.sh -x *.htm
```

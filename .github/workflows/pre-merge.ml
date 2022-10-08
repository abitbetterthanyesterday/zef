name: 'Redwood Build, Lint, Diagnostics, and Tests'
run-name: 'Run CI on a Redwood Project'
on: ['pull_request']
jobs:
  Premerge:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js v16
        uses: actions/setup-node@v3
        with:
          node-version: "16"

      - name: Install dependencies
        working-directory: ${{ steps.project-directory.outputs.dir }}
        run: yarn install --immutable
        shell: bash

      - name: Run Build
        working-directory: ${{ steps.project-directory.outputs.dir }}
        run: yarn rw build
        shell: bash

      - name: Run Lint
        if: ${{ inputs.run-lint == 'yes' }}
        working-directory: ${{ steps.project-directory.outputs.dir }}
        run: yarn rw lint
        shell: bash

      - name: Run Tests
        working-directory: ${{ steps.project-directory.outputs.dir }}
        run: yarn rw test
        shell: bash

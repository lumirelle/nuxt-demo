import { definePrompt } from 'czg'

export default definePrompt({
  markBreakingChangeMode: true,
  allowBreakingChanges: ['feat', 'fix', 'chore'],
  alias: {
    typo: 'docs: fix typos',
    readme: 'docs: update README.md',
  },
  scopeOverrides: {
    test: ['unit', 'e2e'],
    chore: ['copy-writing', 'deps', 'tools'],
  },
})

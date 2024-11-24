args! env.vim
argadd main.ts
argadd manifest.json
argadd tsconfig.json
argadd types.d.ts
set makeprg=tsc\ main.ts

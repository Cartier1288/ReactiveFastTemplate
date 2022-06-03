#!/bin/sh

env $(cat .env.development | xargs) node compileI18N.js
# lang=$DIR_I18N/lang

# echo $lang

# for d in lang ; do
#     npx formatjs compile $d/* --out-file $lang/${d##*/}.json
# done

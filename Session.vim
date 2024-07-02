let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/webdev/machete-exactas/front
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +17 src/App.jsx
badd +1 ./
badd +1 term://~/webdev/machete-exactas/front//18635:/bin/bash
badd +2 src/components/Navbar.jsx
badd +5 src/components/Sidebar.jsx
badd +5 src/pages/home/Sidebar.jsx
badd +18 src/pages/home/Home.jsx
badd +2 src/assets/styles/components.scss
badd +40 src/components/Footer.jsx
badd +1 term://~/webdev/machete-exactas/front//31521:/bin/bash
badd +42 term://~/webdev/machete-exactas/front//31670:/bin/bash
badd +1 src/pages/fisica/data.js
badd +66 src/pages/fisica/Fisica.jsx
badd +1 src/components/Welcome.jsx
badd +4 src/pages/mate/Mate.jsx
badd +16 src/components/CareerMap/CareerMap.jsx
badd +73 src/pages/compu/Compu.jsx
badd +33 src/components/Materia.jsx
badd +1 src/components/Modal.jsx
badd +7 src/components/GraficoPlan.jsx
badd +4 src/components/CareerMap/GraphMap.jsx
badd +253 src/pages/datos/data.js
badd +10 src/pages/datos/Datos.jsx
badd +1 src/assets/styles/home.scss
badd +81 ~/.config/nvim/init.lua
badd +1 src/components/CareerMap/useDAG.jsx
badd +13 src/components/CareerMap/CourseNode.jsx
badd +42 src/assets/styles/compu.scss
badd +3 src/assets/styles/graficoplan.scss
badd +90 term://~/webdev/machete-exactas/front//28267:/bin/bash
badd +312 package-lock.json
badd +1 Session.vim
badd +25 .gitignore
badd +1 package.json
badd +1 pnpm-lock.yaml
badd +2 todo
badd +1 netlify.toml
badd +20 src/assets/styles/datos.scss
badd +31 term://~/webdev/machete-exactas/front//33722:/bin/bash
badd +76 term://~/webdev/machete-exactas/front//35215:/bin/bash
badd +42 term://~/webdev/machete-exactas/front//36939:/bin/bash
argglobal
%argdel
$argadd ./
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
argglobal
if bufexists(fnamemodify("term://~/webdev/machete-exactas/front//18635:/bin/bash", ":p")) | buffer term://~/webdev/machete-exactas/front//18635:/bin/bash | else | edit term://~/webdev/machete-exactas/front//18635:/bin/bash | endif
if &buftype ==# 'terminal'
  silent file term://~/webdev/machete-exactas/front//18635:/bin/bash
endif
balt src/App.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 6 - ((5 * winheight(0) + 21) / 42)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 0
tabnext
edit src/pages/datos/Datos.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt src/components/CareerMap/CareerMap.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 10 - ((9 * winheight(0) + 21) / 42)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 10
normal! 065|
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

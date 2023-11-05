# 系统定义prompt
#autoload -U promptinit
#promptinit
#prompt adam2

#自己定义prompt
autoload -U colors && colors
PROMPT="%{$fg[cyan]%}%T %{$reset_color%}%{$fg_no_bold[yellow]%}%1~ %{$reset_color%}$ "
PS2="> "
PS3="> "
PS4="+ " 

#默认编辑器之神
export EDITOR="vim"
export BROWSER=w3m

#Golang
export GOPATH=$HOME/go

# History
export HISTSIZE=1000
export SAVEHIST=1000
export HISTFILE=~/.zhistory
setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_DUPS      

#允许在交互模式中使用注释
setopt INTERACTIVE_COMMENTS      

#Emacs风格 键绑定
bindkey -e
#设置 [DEL]键 为向后删除
bindkey "\e[3~" delete-char

#以下字符视为单词的一部分
WORDCHARS='*?_-[]~=&;!#$%^(){}<>'

#自动补全功能
setopt AUTO_LIST
setopt AUTO_MENU

autoload -U compinit
compinit

#自动补全选项
zstyle ':completion:*' verbose yes
zstyle ':completion:*' menu select
zstyle ':completion:*:*:default' force-list always
zstyle ':completion:*' select-prompt '%SSelect:  lines: %L  matches: %M  [%p]'

zstyle ':completion:*:match:*' original only
zstyle ':completion::prefix-1:*' completer _complete
zstyle ':completion:predict:*' completer _complete
zstyle ':completion:incremental:*' completer _complete _correct
zstyle ':completion:*' completer _complete _prefix _correct _prefix _match _approximate

#路径补全
zstyle ':completion:*' expand 'yes'
zstyle ':completion:*' squeeze-shlashes 'yes'
zstyle ':completion::complete:*' '\\'

#修正大小写
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}'
#错误校正      
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric

#kill 命令补全      
compdef pkill=kill
compdef pkill=killall
zstyle ':completion:*:*:kill:*' menu yes select
zstyle ':completion:*:*:*:*:processes' force-list always
zstyle ':completion:*:processes' command 'ps -au$USER'

#补全类型提示分组 
zstyle ':completion:*:matches' group 'yes'
zstyle ':completion:*' group-name ''
zstyle ':completion:*:options' description 'yes'
zstyle ':completion:*:options' auto-description '%d'
zstyle ':completion:*:descriptions' format $'\e[01;33m -- %d --\e[0m'
zstyle ':completion:*:messages' format $'\e[01;35m -- %d --\e[0m'
zstyle ':completion:*:warnings' format $'\e[01;31m -- No Matches Found --\e[0m'
zstyle ':completion:*:corrections' format $'\e[01;32m -- %d (errors: %e) --\e[0m'

# cd ~ 补全顺序
zstyle ':completion:*:-tilde-:*' group-order 'named-directories' 'path-directories' 'users' 'expand'
  
#命令别名
alias -g cp='cp -i'
alias -g mv='mv -i'
alias -g rm='rm -i'
alias -g ls='ls -F --color=auto'
alias -g ll='ls -al'
alias -g la='ls -A'
alias -g grep='grep --color=auto'

# Pacman 别名示例
alias pacyy='sudo pacman -Syy'         # 强制刷新软件仓库信息
alias pacup='sudo pacman -Syu'         # 同步软件仓库信息然后升级系统
alias pacin='sudo pacman -S'           # 从软件仓库安装软件包
alias pacr='sudo pacman -R'            # 删除软件包，保留配置和依赖
alias pacdel='sudo pacman -Rns'        # 彻底删除软件包，清除配置，删除无用依赖
alias pacss='pacman -Ss'               # 在软件仓库搜索软件包
alias pacrep='pacman -Si'              # 显示软件仓库中某软件包的信息
alias pacloc='pacman -Qi'              # 显示本地数据库中某软件包的信息
alias paclocs='pacman -Qs'             # 在本地数据库搜索软件包
alias off='systemctl poweroff'
alias re='systemctl reboot'

#ffmpeg
alias avi='ffmpeg -f alsa -ac 2 -vol 512 -i hw:0,0 -f x11grab -s hd1080 -r 30 -i :0.0+0+0 -qscale 5'
alias mp3='ffmpeg -f alsa -ac 2 -vol 512 -i hw:0,0'

#proxychains-ng config
alias pc='proxychains4'

#从视频中提取声音.mp3
alias pickup='mencoder -oac mp3lame -ovc copy -of rawaudio'

#Android connect
alias scrcpy='scrcpy --turn-screen-off --stay-awake'

# colord man page
man() {
    env \
        LESS_TERMCAP_mb=$(printf "\e[1;37m") \
        LESS_TERMCAP_md=$(printf "\e[1;37m") \
        LESS_TERMCAP_me=$(printf "\e[0m") \
        LESS_TERMCAP_se=$(printf "\e[0m") \
        LESS_TERMCAP_so=$(printf "\e[1;47;30m") \
        LESS_TERMCAP_ue=$(printf "\e[0m") \
        LESS_TERMCAP_us=$(printf "\e[0;36m") \
            man "$@"
}

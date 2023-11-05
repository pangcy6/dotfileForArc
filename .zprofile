#Auto run startx
#[ -z "$DISPLAY" -a "$(fgconsole)" -eq 1 ] && exec startx
if [ -z "$DISPLAY" ] && [ "$(fgconsole)" -eq 1 ]; then
  startx
fi

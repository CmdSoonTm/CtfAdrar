# CtfAdrar
Idées CTF

# Le dossier comprend :
  1. Index par defaut
  2. Intro
  3. Flag01 qui est l'introduction au ctf -- HTML/CSS/JS -- ( FINI )
  4. Flag02 qui pousse le bouchon un peu loin maurice -- Sur base NodeJs (Vue3) Intro au hacking SQL + 2 sites ( AstroBooking.coin et NASA.futur ) -- ( En cours )
  5. Flag03 qui fait plaisir -- Failles services Linux + Escalation privileges via sudo -- ( Plannifié )

# Modrewrite
  Les chemins sont cachés par flags
  RewriteRule ^/flag01$ /var/www/ctfadrar/flag01 [L]
  RewriteRule ^/flag02$ /var/www/ctfadrar/flag02 [L]
  RewriteRule ^/flag03$ /var/www/ctfadrar/flag03 [L]
  RewriteRule ^/intro$ /var/www/ctfadrar/intro [L]
  RewriteRule ^/bienvenue$ /var/www/ctfadrar/index.html [L]

  Un script bash est dispo pour l'install d'Apache2 + création user dédié + configuration site -- ctfadrar_config.sh

### Please amis Devs, ne me jugez pas ^^

#!/bin/sh

# Récupérer l'IP publique
PUBLIC_IP=$(curl -s https://api64.ipify.org)

# Construire l'endpoint complet (avec port / path si besoin)
API_ENDPOINT="http://${PUBLIC_IP}:8080/api/tasks"

# Modifier app.js directement avec sed (remplace __API_ENDPOINT__ par l’URL)
sed -i "s|__API_ENDPOINT__|$API_ENDPOINT|g" /usr/share/nginx/html/frontend/app.js

# Exécuter la commande nginx
exec "$@"

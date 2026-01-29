FROM nginx:latest

# Copier les fichiers du frontend
COPY . /usr/share/nginx/html

# Copier le script d’entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# Génère config.js puis démarre nginx
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]


FROM nginx:alpine

COPY ./docs /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Execute o Nginx
CMD ["nginx", "-g", "daemon off;"]

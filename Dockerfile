
# Використовуємо офіційний образ Node.js
FROM node:latest

# Встановлюємо директорію робочого каталогу в контейнері
WORKDIR /usr/src/app

# Копіюємо package.json та package-lock.json для установки залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь залишок проекту в контейнер
COPY . .

# Виконуємо команду запуску додатка
CMD [ "npm", "run", "dev" ]
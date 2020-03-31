FROM microsoft/dotnet:sdk AS build-env

# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \ 
	&& apt update \
	&& apt install -y nodejs

WORKDIR /app

# Make sure angular CLI is installed
RUN npm install -g @angular/cli

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o build

FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/build .
VOLUME [ "/app/data" ]
EXPOSE 80
ENTRYPOINT ["dotnet", "maker-dash.dll"]
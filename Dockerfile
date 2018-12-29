FROM microsoft/dotnet:aspnetcore-runtime
ARG source
WORKDIR /app
RUN mkdir Data
COPY ${source:-/build} .
EXPOSE 80
ENTRYPOINT ["dotnet", "maker-dash.dll"]

#NOTE: this Dockerfile needs to be run with the context of its parent dir

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

COPY module-campaigns/src/ module-campaigns/src/
COPY module-campaigns/nuget.config module-campaigns/nuget.config

WORKDIR /module-campaigns/src/Podkrepibg.Campaigns
RUN dotnet build "Podkrepibg.Campaigns.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Podkrepibg.Campaigns.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENV ASPNETCORE_URLS http://+:5001

ENTRYPOINT ["dotnet", "Podkrepibg.Campaigns.dll"]

@echo off
echo ========================================================
echo   Deploying Mustafa Ali Hakeemi Portfolio to Vercel
echo ========================================================
echo.
cd /d "%~dp0"
echo Running Vercel deployment...
npx vercel --prod
echo.
pause

@echo off
echo ========================================================
echo   Deploying Mustafa Ali Hakeemi Portfolio to Vercel
echo ========================================================
echo.
cd /d "%~dp0"

echo Step 1: Checking Vercel Login...
echo (If already logged in, it proceeds automatically)
echo.
call npx.cmd vercel login
echo.
echo ========================================================
echo Step 2: Deploying to Production...
echo ========================================================
echo.
call npx.cmd vercel --prod
echo.
echo ========================================================
echo   Deployment process completed.
echo ========================================================
echo.
pause

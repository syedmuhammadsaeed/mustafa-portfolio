@echo off
setlocal
echo ========================================================
echo   Deploying Mustafa Ali Hakeemi Portfolio to Vercel
echo ========================================================
echo.
cd /d "%~dp0"
echo Running Vercel deployment...
echo.
call npx.cmd vercel --prod
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   Deployment completed successfully!
    echo ========================================================
) else (
    echo Deployment encountered an issue. See message above.
)
echo.
pause

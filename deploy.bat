@echo off
setlocal
echo ========================================================
echo   Deploying Mustafa Ali Hakeemi Portfolio to Vercel
echo ========================================================
echo.
cd /d "%~dp0"

echo Checking Vercel authentication...
call npx.cmd vercel whoami >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo ========================================================
    echo   Not logged in to Vercel yet.
    echo   Opening login prompt (select Continue with GitHub)...
    echo ========================================================
    echo.
    call npx.cmd vercel login
)

echo.
echo Running production deployment...
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

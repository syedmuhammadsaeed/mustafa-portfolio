@echo off
setlocal
echo ========================================================
echo   Push Mustafa Ali Hakeemi Portfolio to GitHub
echo ========================================================
echo.
cd /d "%~dp0"

set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
if not exist "%GIT_CMD%" set "GIT_CMD=git"

REM Check if remote origin exists
"%GIT_CMD%" remote get-url origin >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Remote 'origin' is not configured yet.
    set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/syedmuhammadsaeed/mustafa-portfolio.git): "
    if "%REPO_URL%"=="" (
        echo Error: No URL entered.
        pause
        exit /b 1
    )
    "%GIT_CMD%" remote add origin %REPO_URL%
    echo Added remote: %REPO_URL%
)

echo.
echo Checking git status...
"%GIT_CMD%" add .
"%GIT_CMD%" commit -m "Update portfolio files" >nul 2>&1
"%GIT_CMD%" branch -M main

echo.
echo Pushing to GitHub (main branch)...
"%GIT_CMD%" push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   Successfully pushed to GitHub!
    echo ========================================================
) else (
    echo Push failed or was cancelled. Please check your credentials.
)
echo.
pause

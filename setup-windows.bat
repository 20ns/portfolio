@echo off
echo Setting up Portfolio for Windows...
echo.

REM Remove existing installations
if exist "node_modules" (
    echo Removing existing node_modules...
    rmdir /s /q node_modules
)

if exist "package-lock.json" (
    echo Removing existing package-lock.json...
    del package-lock.json
)

REM Install fresh dependencies
echo Installing dependencies for Windows...
npm install

echo.
echo Setup complete! You can now run:
echo   npm run dev
echo   or
echo   dev.bat
echo.
pause
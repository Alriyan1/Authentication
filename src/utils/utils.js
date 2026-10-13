export function generateOtp(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOptHtml(otp){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;          
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .otp-box {
                background-color: #f0f0f0;
                padding: 10px;
                border-radius: 5px;
                font-size: 24px;
                font-weight: bold;
                margin: 20px 0;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #888;
            }
            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>OTP Verification</h2>
            <p>Please use the following One-Time Password (OTP) to verify your email address.</p>
            <div class="otp-box">
                ${otp}
            </div>
            <div class="footer">
                <p>If you did not initiate this request, please ignore this email.</p>
                <p>Security Team</p>
            </div>
        </div> 
    </body>
    </html>`
}
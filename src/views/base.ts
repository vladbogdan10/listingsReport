export function html(body: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Reports</title>
      <link rel="stylesheet" href="static/styles.css" type="text/css">
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}

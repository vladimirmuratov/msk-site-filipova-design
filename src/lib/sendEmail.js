export async function sendEmail(data) {
    const res = await fetch('/api/send-mail', {
        method: 'POST',
        body: data
    })

    return res.status
}

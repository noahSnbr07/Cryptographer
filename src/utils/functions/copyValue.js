export default function copyValue(value) {
    navigator.clipboard.writeText(value)
        .catch((error) => console.error('Error copying to clipboard: ', error));
}

export async function pedirMetas() {
    const response = await fetch('/metas.json');
    const metas = await response.json();
    return metas;
}
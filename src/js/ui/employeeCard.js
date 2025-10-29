export function renderEmployeeCard(tpl, emp) {
    const node = tpl.content.cloneNode(true);
    const img  = node.querySelector('.employee-card__photo');
    const name = node.querySelector('.employee-card__name');
    const role = node.querySelector('.employee-card__role');
    const cta  = node.querySelector('.employee-card__cta');

    img.src = emp.photo;
    img.alt = `Фото: ${emp.name}`;
    name.textContent = emp.name;
    role.textContent = emp.role;
    cta.href = emp.profileUrl;

    return node;
}

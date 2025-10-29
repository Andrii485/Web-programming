export async function loadEmployees(limit = 3, { signal } = {}) {
    const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();

    return users.map(u => ({
        id: u.id,
        name: u.name,
        role: u.company?.catchPhrase ?? 'Team member',
        profileUrl: `https://jsonplaceholder.typicode.com/users/${u.id}`,
        photo: `https://picsum.photos/seed/emp-${u.id}/640/400`,
    }));
}

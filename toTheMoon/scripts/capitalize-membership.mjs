export function capitalizeMembership(membership) {
    const capitalizedMembership = membership.charAt(0).toUpperCase() + membership.slice(1, 7) + " " + membership.charAt(8).toUpperCase() + membership.slice(9, membership.length)
    return capitalizedMembership;
}
export default {
    path: '/ipam',
    component: () =>
        import ('@/views/Ipam'),
    children: [
        {
            path: 'CreatePrefix',
            component: () =>
                import ('@/views/Ipam/CreatePrefix/index')
        },
        {
            path: 'AcquireIP',
            component: () =>
                import ('@/views/Ipam/AcquireIP/index')
        },
        {
            path: 'ReleaseIP',
            component: () =>
                import ('@/views/Ipam/ReleaseIP/index')
        },
        {
            path: 'DeletePrefix',
            component: () =>
                import ('@/views/Ipam/DeletePrefix/index')
        },
        {
            path: '/ipam*',
            redirect: '/ipam/CreatePrefix'
        }
    ]
}
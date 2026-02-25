document.addEventListener('DOMContentLoaded', () => {
    // 1. Mock Database Data (In production, use fetch('/api/data'))
    const mockDbData = {
        revenue: [42000, 48000, 51000, 59000, 65000, 76500],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        stats: {
            total: "$341,500",
            occupancy: "94.2%",
            tickets: 12
        }
    };

    // 2. Update Stats Cards
    document.getElementById('total-revenue').innerText = mockDbData.stats.total;
    document.getElementById('occupancy-rate').innerText = mockDbData.stats.occupancy;
    document.getElementById('open-tickets').innerText = mockDbData.stats.tickets;

    // 3. Initialize Chart
    const ctx = document.getElementById('revenueChart').getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(79, 70, 229, 0.3)');
    gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockDbData.months,
            datasets: [{
                label: 'Revenue',
                data: mockDbData.revenue,
                borderColor: '#4f46e5',
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { 
                    beginAtZero: true,
                    grid: { color: '#f1f5f9' },
                    ticks: { callback: value => '$' + value.toLocaleString() }
                },
                x: { grid: { display: false } }
            }
        }
    });
});
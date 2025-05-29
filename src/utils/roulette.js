function calculateSectionAngles(entries) {
    const totalWeight = entries.reduce((sum, entry) => sum + (entry.weight || 1), 0);
    let currentAngle = 0;
    const sections = entries.map(entry => {
        const weight = entry.weight || 1;
        const angle = (weight / totalWeight) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;
        currentAngle = endAngle;
        return {
            ...entry,
            angle,
            startAngle, // Angle where this section begins
            endAngle,   // Angle where this section ends
            // For text positioning (center of the arc)
            textAngle: startAngle + (angle / 2)
        };
    });
    return sections;
}

// Function to describe an arc path (for SVG <path> d attribute)
function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}

// Helper for describeArc
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export { calculateSectionAngles, describeArc, polarToCartesian }
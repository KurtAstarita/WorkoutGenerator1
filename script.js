const exercises = {
    muscle: {
        beginner: {
            dumbbells: [
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Dumbbell Chest Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 35 },
            ],
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Incline Push-ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
                { name: "Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
            machines: [
                { name: "Chest Press Machine", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Lat Pulldown Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Leg Press Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
                { name: "Seated Row Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Shoulder Press Machine", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Leg Extension Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Hamstring Curl Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Calf Raise Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
                { name: "Ab Crunch Machine", muscleGroup: "core & cardio", label: "5", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
                { name: "Back Extension Machine", muscleGroup: "legs & back", label: "3", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
            barbells: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 75 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Barbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 15, rest: 75, timePerSet: 30 },
            ],
        },
        intermediate: {
            barbell: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 90 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 6, rest: 120, timePerSet: 90 }, // Multi-label
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 12, rest: 90, timePerSet: 35 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 50 },
            ],
            gym: [
                { name: "Lat Pulldowns", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Leg Press", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 60 },
                { name: "Cable Rows", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Chest Flyes", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "25", rest: 90, timePerSet: 60 }, // Assuming ~25 seconds for a set
                { name: "Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 }, // Multi-label
                { name: "Leg Extensions", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Hamstring Curls", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Cable Triceps Pushdowns", muscleGroup: "chest & triceps", label: "4", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Face Pulls", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 60 },
            ],
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: "25", rest: 75, timePerSet: 50 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 40 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 60 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
                { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
                { name: "Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
            ],
        },
        advanced: {
            gym: [
                { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 6, rest: 120, timePerSet: 75 }, // Multi-label
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 120, timePerSet: 60 },
                { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Barbell Rows Pendlay", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Incline Barbell Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
                { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
                { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 120, timePerSet: 75 },
            ],
            barbell: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 90 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 90 }, // Multi-label
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 90 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 10, rest: 120, timePerSet: 35 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 50 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 75 },
            ],
            bodyweight: [
                { name: "Push ups Weighted", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 4, reps: "AMRAP", rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Handstand Push ups", muscleGroup: "delts & traps", label: "4", equipment: "Bodyweight", sets: 3, reps: "As many as 5", rest: 120, timePerSet: 90 },
                { name: "Muscle ups", muscleGroup: "back & biceps, chest & triceps", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: "5", rest: 180, timePerSet: 120 }, // Multi-label
                { name: "Planche Leans", muscleGroup: "delts & traps, core & cardio", label: "4, 5", equipment: "Bodyweight", sets: 3, reps: "15", rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Front Lever Holds", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "15 sec hold", rest: 120, timePerSet: 15 }, // Multi-label
                { name: "One Arm Pull ups Assisted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 90 },
                { name: "Advanced Plank Variations", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "60 sec hold", rest: 120, timePerSet: 60 },
            ],
        },
    },
strength: {
        beginner: {
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 8, rest: 90, timePerSet: 30 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "20 sec", rest: 90, timePerSet: 20 },
                { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 25 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Walking Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 90, timePerSet: 30 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Knee Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
            ],
            dumbbells: [
                { name: "Dumbbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
            ],
            barbells: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Barbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
            ],
            machines: [
                { name: "Leg Press Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Chest Press Machine", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Lat Pulldown Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Seated Row Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Shoulder Press Machine", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Leg Extension Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Hamstring Curl Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Calf Raise Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 20 },
                { name: "Ab Crunch Machine", muscleGroup: "core & cardio", label: "5", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 15 },
                { name: "Back Extension Machine", muscleGroup: "legs & back", label: "3", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 25 },
            ],
        },
intermediate: {
            barbell: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 180, timePerSet: 60 }, // Multi-label
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
                { name: "Barbell Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 3, rest: 120, timePerSet: 45 }, // Multi-label
                { name: "Barbell Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
                { name: "Barbell Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 20 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Pull overs", muscleGroup: "chest & triceps, back & biceps", label: "2, 3", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
            ],
            bodyweight: [
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 }, // Multi-label
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "45 sec", rest: 90, timePerSet: 45 },
                { name: "Chin ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Inverted Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Hanging Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
                { name: "Back Extensions", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
        },
      advanced: {
            gym: [
                { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
                { name: "Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 90 },
                { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
                { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 240, timePerSet: 60 }, // Multi-label
                { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 3, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Snatch", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 2, rest: 240, timePerSet: 45 }, // Multi-label
            ],
            barbell: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 3, rest: 300, timePerSet: 60 }, // Multi-label
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
                { name: "Barbell Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 2, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Barbell Snatch", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 1, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Barbell Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 60 },
                { name: "Dumbbell Pull overs", muscleGroup: "chest & triceps, back & biceps", label: "2, 3", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 25 },
            ],
            bodyweight: [
                { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
                { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 45 }, // Multi-label
                { name: "Push ups Plyometric", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 30 },
                { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Handstand Push ups Assisted", muscleGroup: "delts & traps", label: "4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
                { name: "Front Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
                { name: "Back Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "10 sec ", rest: 180, timePerSet: 10 }, // Multi-label
                { name: "Muscle ups Progression", muscleGroup: "back & biceps, chest & triceps", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: 3, rest: 180, timePerSet: 90 }, // Multi-label
                { name: "One Arm Push up Progression", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 3, rest: 120, timePerSet: 45 },
                { name: "Dragon Flags Progression", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
            ],
        },
    },
endurance: {
        beginner: {
            bodyweight: [
                { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
                { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Walking", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 }, // Multi-label
                { name: "Butt Kicks", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 40, timePerSet: 20 }, // Multi-label
                { name: "Step ups", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Optional Step", sets: 3, reps: 10, rest: 30, timePerSet: 30 }, // Multi-label
            ],
            dumbbells: [
                { name: "Dumbbell Thrusters", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Swings", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "Dumbbell Shadow Boxing", muscleGroup: "cardio, shoulders, arms", label: "2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
            ],
            gym: [
                { name: "Treadmill Run", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 }, // Multi-label
                { name: "Elliptical", muscleGroup: "cardio, full body", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 }, // Multi-label
                { name: "Stationary Bike", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 }, // Multi-label
            ],
        },
intermediate: {
            bodyweight: [
                { name: "Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 60 }, // Multi-label
                { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Running", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 }, // Multi-label
                { name: "Jump Squats", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "High Plank Jacks", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 30, timePerSet: 20 }, // Multi-label
                { name: "Skater Jumps", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 30, timePerSet: 30 }, // Multi-label
            ],
            dumbbells: [
                { name: "Dumbbell Snatches", muscleGroup: "full body, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 45 }, // Multi-label
                { name: "Dumbbell Push Press", muscleGroup: "shoulders, triceps, legs, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Renegade Rows", muscleGroup: "back, core, cardio", label: "3, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Walking Lunges", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 30, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Dumbbells", sets: 3, reps: 8, rest: 45, timePerSet: 60 }, // Multi-label
            ],
            gym: [
                { name: "Rowing Machine", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Rowing Machine", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 }, // Multi-label
                { name: "Assault Bike", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 1, reps: "720 sec", rest: 30, timePerSet: 720 }, // Multi-label
                { name: "Stair Climber", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Stair Climber", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 }, // Multi-label
                { name: "Battle Ropes", muscleGroup: "shoulders, arms, core, cardio", label: "2, 3, 4, 5", equipment: "Battle Ropes", sets: 3, reps: 30, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "Sled Push", muscleGroup: "legs, core, cardio", label: "1, 5", equipment: "Sled", sets: 3, reps: 20, rest: 60, timePerSet: 45 }, // Multi-label
                { name: "Dumbbell Pull overs", muscleGroup: "chest & triceps, back & biceps, cardio", label: "2, 3, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 40 }, // Multi-label (including cardio as it can be done at a faster pace for endurance)
                { name: "Dumbbell Calf Raises", muscleGroup: "legs", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 25 }, // Primarily legs, less cardio focused at this rep range
            ],
        },
        advanced: {
            bodyweight: [
                { name: "Long Distance Running", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 1, reps: "3600 sec", rest: 30, timePerSet: 3600 }, // Multi-label
                { name: "HIIT Training", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 10, timePerSet: 20 }, // Multi-label
                { name: "Sprints", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 8, reps: "100m", rest: 60, timePerSet: 20 }, // Multi-label
                { name: "Plyometric Circuit", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 45 }, // Multi-label
                { name: "Hill Sprints", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Hill", sets: 6, reps: "50m", rest: 90, timePerSet: 15 }, // Multi-label
                { name: "Muscle Ups", muscleGroup: "back & biceps, chest & triceps, cardio", label: "2, 3, 5", equipment: "Pull-up Bar", sets: 5, reps: "AMRAP", rest: 120, timePerSet: 60 }, // Multi-label
            ],
            dumbbells: [
                { name: "Dumbbell Complex", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 8, rest: 60, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Snatch and Overhead Squat", muscleGroup: "full body, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 6, rest: 90, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Farmer's Walk", muscleGroup: "core, grip, legs, shoulders, cardio", label: "1, 4, 5", equipment: "Dumbbells", sets: 3, reps: "50m", rest: 90, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Thruster Ladder", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 1, reps: "Ladder", rest: 120, timePerSet: 180 }, // Multi-label
                { name: "Dumbbell Turkish Get ups", muscleGroup: "full body, core, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbell", sets: 3, reps: 5, rest: 90, timePerSet: 90 }, // Multi-label
            ],
            gym: [
                { name: "Interval Rowing", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Rowing Machine", sets: 5, reps: "500m", rest: 120, timePerSet: 120 }, // Multi-label
                { name: "High Intensity Assault Bike Intervals", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 6, reps: 30, rest: 60, timePerSet: 30 }, // Multi-label
                { name: "Loaded Sled Pushes", muscleGroup: "legs, core, cardio", label: "1, 5", equipment: "Sled", sets: 5, reps: "50m", rest: 120, timePerSet: 45 }, // Multi-label
                { name: "Ski Erg Intervals", muscleGroup: "full body, cardio", label: "2, 3, 4, 5", equipment: "Ski Erg", sets: 4, reps: 40, rest: 90, timePerSet: 45 }, // Multi-label
                { name: "VersaClimber Intervals", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "VersaClimber", sets: 4, reps: 30, rest: 90, timePerSet: 45 }, // Multi-label
            ],
        },
    },
    fatloss: {
        beginner: {
            bodyweight: [
                { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
                { name: "Squats", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "Push ups", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 45, timePerSet: 25 }, // Multi-label
                { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Walking Lunges", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 30, timePerSet: 60 }, // Multi-label
                { name: "Plank", muscleGroup: "core, cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            ],
            dumbbells: [
                { name: "Dumbbell Squat to Press", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 45 }, // Multi-label
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 60 },
                { name: "Dumbbell Thrusters", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Step ups", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 30, timePerSet: 45 }, // Multi-label
            ],
            gym: [
                { name: "Treadmill Walk or Jog", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 }, // Multi-label
                { name: "Elliptical Trainer", muscleGroup: "cardio, full body", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 }, // Multi-label
                { name: "Stationary Bike", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 }, // Multi-label
                { name: "Rowing Machine", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Rowing Machine", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 }, // Multi-label
                { name: "Leg Press Machine", muscleGroup: "legs", label: "1", equipment: "Machines", sets: 3, reps: 15, rest: 45, timePerSet: 40 },
            ],
        },
        intermediate: {
            bodyweight: [
                { name: "Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 60 }, // Multi-label
                { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Lunges", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 60 }, // Multi-label
                { name: "Jump Squats", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "High Plank Jacks", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 30, timePerSet: 20 }, // Multi-label
                { name: "Skater Jumps", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 30, timePerSet: 30 }, // Multi-label
            ],
            dumbbells: [
                { name: "Dumbbell Snatches", muscleGroup: "full body, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 45 }, // Multi-label
                { name: "Dumbbell Push Press", muscleGroup: "shoulders, triceps, legs, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Renegade Rows", muscleGroup: "back, core, cardio", label: "3, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Walking Lunges", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 30, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Dumbbells", sets: 3, reps: 8, rest: 45, timePerSet: 60 }, // Multi-label
            ],
            gym: [
                { name: "Rowing Machine Intervals", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Rowing Machine", sets: 4, reps: 500, rest: 60, timePerSet: 120 }, // Multi-label
                { name: "Assault Bike Intervals", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 4, reps: 30, rest: 60, timePerSet: 30 }, // Multi-label
                { name: "Stair Climber Intervals", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Stair Climber", sets: 4, reps: 20, rest: 60, timePerSet: 60 }, // Multi-label
                { name: "Battle Ropes", muscleGroup: "shoulders, arms, core, cardio", label: "2, 3, 4, 5", equipment: "Battle Ropes", sets: 3, reps: 30, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "Sled Push", muscleGroup: "legs, core, cardio", label: "1, 5", equipment: "Sled", sets: 3, reps: 20, rest: 60, timePerSet: 45 }, // Multi-label
            ],
        },
      advanced: {
            bodyweight: [
                { name: "High Intensity Burpee Variations", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 30, timePerSet: 45 }, // Multi-label
                { name: "Advanced Plyometric Circuit", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 4, reps: 15, rest: 45, timePerSet: 60 }, // Multi-label
                { name: "Complex Bodyweight Movements", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 4, reps: 10, rest: 60, timePerSet: 60 }, // Multi-label
                { name: "Sprint Intervals", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 6, reps: "100m", rest: 60, timePerSet: 20 }, // Multi-label
                { name: "Hill Sprints with Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Hill, Bodyweight", sets: 5, reps: "50m", rest: 90, timePerSet: 45 }, // Multi-label
            ],
            dumbbells: [
                { name: "Dumbbell Complex Circuit", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 10, rest: 60, timePerSet: 75 }, // Multi-label
                { name: "Dumbbell Snatch and Overhead Squat Complex", muscleGroup: "full body, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 8, rest: 60, timePerSet: 60 }, // Multi-label
                { name: "Dumbbell Thruster Ladder", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 1, reps: "Ladder", rest: 120, timePerSet: 180 }, // Multi-label
                { name: "Dumbbell Renegade Row Complex", muscleGroup: "back, core, cardio", label: "3, 5", equipment: "Dumbbells", sets: 4, reps: 10, rest: 60, timePerSet: 75 }, // Multi-label
                { name: "Dumbbell Turkish Get ups with Press", muscleGroup: "full body, core, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbell", sets: 3, reps: 5, rest: 90, timePerSet: 90 }, // Multi-label
            ],
            gym: [
                { name: "HIIT on Treadmill", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 5, reps: 30, rest: 30, timePerSet: 30 }, // Multi-label
                { name: "Rowing Machine Intervals", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Rowing Machine", sets: 5, reps: 500, rest: 60, timePerSet: 120 }, // Multi-label
                { name: "Kettlebell Swings", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Kettlebell", sets: 4, reps: 20, rest: 45, timePerSet: 30 }, // Multi-label
                { name: "Assault Bike Intervals", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 6, reps: 30, rest: 60, timePerSet: 30 }, // Multi-label
                { name: "Ski Erg Intervals", muscleGroup: "full body, cardio", label: "2, 3, 4, 5", equipment: "Ski Erg", sets: 5, reps: 40, rest: 60, timePerSet: 45 }, // Multi-label
            ],
        },
    },
calisthenics: {
        beginner: [
            { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
            { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
            { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
            { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
            { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Supermans", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
            { name: "Knee Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Russian Twists", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
            { name: "Bird Dog", muscleGroup: "core & back", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 20 },
            { name: "Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
            { name: "Reverse Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 20 },
            { name: "Bodyweight Rows Inverted Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bar or Table", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Side Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "20 sec", rest: 60, timePerSet: 20 },
            { name: "Donkey Kicks", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
            { name: "Lateral Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
            { name: "Bear Crawls", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 60, timePerSet: 45 }, // Multi-label
            { name: "Assisted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
            { name: "Band Assisted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Resistance Band", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Band Assisted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair, Resistance Band", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
            { name: "Negative Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
            { name: "Negative Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
            { name: "Incline Rows Assisted", muscleGroup: "back & biceps", label: "3", equipment: "Table or Low Bar", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
            { name: "Elevated Pike Push ups Assisted", muscleGroup: "delts & traps", label: "4", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Wall Assisted Handstand Holds", muscleGroup: "delts & traps, core", label: "4, 5", equipment: "Wall", sets: 3, reps: "15 sec", rest: 60, timePerSet: 15 }, // Multi-label
            { name: "Band Assisted Squats", muscleGroup: "legs & back", label: "1", equipment: "Resistance Band", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
        ],
      intermediate: [
            { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
            { name: "Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
            { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 6, rest: 90, timePerSet: 60 },
            { name: "Handstand Practice", muscleGroup: "delts & traps, core", label: "4, 5", equipment: "Bodyweight, Wall (optional)", sets: 3, reps: "30 sec", rest: 90, timePerSet: 30 }, // Multi-label
            { name: "Archer Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 6, rest: 90, timePerSet: 45 }, // Multi-label
            { name: "Australian Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Low Bar or Table", sets: 3, reps: 12, rest: 60, timePerSet: 40 },
            { name: "L-Sit Holds", muscleGroup: "core, shoulders, triceps", label: "2, 4, 5", equipment: "Parallel Bars or Floor", sets: 3, reps: "20 sec", rest: 90, timePerSet: 20 }, // Multi-label
            { name: "Elevated Pike Push ups", muscleGroup: "delts & traps, triceps", label: "4", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
            { name: "Jump Squats", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Close Grip Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Weighted Dips Light", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight (optional)", sets: 3, reps: 6, rest: 90, timePerSet: 40 },
            { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
            { name: "Push ups Plyometric", muscleGroup: "chest & triceps, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 30 }, // Multi-label
            { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Handstand Push ups Assisted", muscleGroup: "delts & traps, triceps, core", label: "2, 4, 5", equipment: "Wall", sets: 3, reps: 5, rest: 180, timePerSet: 60 }, // Multi-label
            { name: "Front Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
            { name: "Back Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
            { name: "Muscle ups Progression", muscleGroup: "back & biceps, chest & triceps, shoulders, core", label: "2, 3, 4, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: 3, rest: 180, timePerSet: 90 }, // Multi-label
            { name: "One Arm Push up Progression", muscleGroup: "chest & triceps, shoulders, core", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 3, rest: 120, timePerSet: 45 }, // Multi-label
            { name: "Dragon Flags Progression", muscleGroup: "core & cardio, legs (isometric)", label: "1, 5", equipment: "Bench or Stable Surface", sets: 3, reps: 8, rest: 120, timePerSet: 45 }, // Multi-label
        ],
        advanced: [
            { name: "Front Lever", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "15 sec", rest: 120, timePerSet: 15 }, // Multi-label
            { name: "One Arm Pull ups", muscleGroup: "back & biceps, core", label: "3", equipment: "Pull-up Bar or Rings", sets: 3, reps: 3, rest: 120, timePerSet: 60 },
            { name: "Planche", muscleGroup: "delts & traps, chest & triceps, core", label: "2, 4, 5", equipment: "Parallel Bars or Floor", sets: 3, reps: "10 sec", rest: 120, timePerSet: 10 }, // Multi-label
            { name: "One Arm Handstand Push ups", muscleGroup: "delts & traps, triceps, core", label: "2, 4, 5", equipment: "Wall (optional)", sets: 3, reps: 3, rest: 120, timePerSet: 90 }, // Multi-label
            { name: "Victorian Cross", muscleGroup: "delts & traps, chest, biceps, core", label: "2, 3, 4, 5", equipment: "Rings", sets: 3, reps: "5 sec", rest: 180, timePerSet: 5 }, // Multi-label
            { name: "Human Flag", muscleGroup: "shoulders, core, obliques", label: "4, 5", equipment: "Vertical Bar", sets: 3, reps: "5 sec", rest: 180, timePerSet: 5 }, // Multi-label
            { name: "90 Degree Push ups", muscleGroup: "chest & triceps, shoulders, core", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 5, rest: 120, timePerSet: 45 }, // Multi-label
            { name: "Back Lever", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "10 sec", rest: 120, timePerSet: 10 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 4, reps: 5, rest: 120, timePerSet: 60 },
            { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 4, reps: 8, rest: 120, timePerSet: 45 },
            { name: "Weighted Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight, Weight (optional)", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
            { name: "Weighted Archer Pull ups", muscleGroup: "back & biceps, shoulders, core", label: "3, 4", equipment: "Pull-up Bar or Rings, Weight (optional)", sets: 3, reps: 4, rest: 120, timePerSet: 60 }, // Multi-label
            { name: "Weighted Australian Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Low Bar or Table, Weight (optional)", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
            { name: "Weighted L Sit Holds", muscleGroup: "core, shoulders, triceps", label: "2, 4, 5", equipment: "Parallel Bars or Floor, Weight (optional)", sets: 3, reps: "15 sec", rest: 120, timePerSet: 15 }, // Multi-label
            { name: "Weighted Pike Push ups", muscleGroup: "delts & traps, triceps", label: "4", equipment: "Elevated Surface, Weight (optional)", sets: 3, reps: 6, rest: 120, timePerSet: 45 },
            { name: "Weighted Close Grip Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight, Weight (optional)", sets: 3, reps: 10, rest: 90, timePerSet: 30 }, // Multi-label
            { name: "Weighted Back Lever Pulls", muscleGroup: "back & biceps, core", label: "3, 5", equipment: "Pull-up Bar or Rings, Weight (optional)", sets: 3, reps: 5, rest: 120, timePerSet: 60 }, // Multi-label
        ],
    },
  powerlifting_5x5: {
        beginner: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Arnold Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 120, timePerSet: 50 },
            { name: "Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 90 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 120, timePerSet: 30 },
            { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
        ],
     intermediate: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Push Press", muscleGroup: "delts & traps, triceps", label: "2, 4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 60 }, // Multi-label
            { name: "Sumo Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 45 },
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Behind the Neck Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Snatch Grip Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
        ],
        advanced: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
            { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Push Press", muscleGroup: "delts & traps, triceps", label: "2, 4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Sumo Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
            { name: "Muscle Ups", muscleGroup: "back & biceps, chest & triceps, shoulders, core", label: "2, 3, 4, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 75 }, // Multi-label
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 120 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Behind the Neck Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Snatch Grip Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
        ],
    },
    hiit: {
        beginner: [
            { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
            { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Butt Kicks", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 }, // Multi-label
            { name: "Squats", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 }, // Multi-label
            { name: "Push ups on Knees", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 }, // Multi-label
        ],
        intermediate: [
            { name: "Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Jump Squats", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Push ups", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Plank Jacks", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
        ],
        advanced: [
            { name: "Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 8, reps: "40 sec", rest: 20, timePerSet: 40 }, // Multi-label
            { name: "Box Jumps", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Box", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Thrusters", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells or Barbell", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Sprints on the Spot", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 }, // Multi-label
            { name: "Pull ups", muscleGroup: "back & biceps, cardio", label: "3, 5", equipment: "Pull-up Bar", sets: 8, reps: "20 sec", rest: 40, timePerSet: 20 }, // Multi-label
            { name: "Dips", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Dip Bar or Parallel Bars", sets: 8, reps: "20 sec", rest: 40, timePerSet: 20 }, // Multi-label
        ],
    },
   circuit: {
        beginner: [
            { name: "Squats", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 10, timePerSet: 30 }, // Multi-label
            { name: "Push ups", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 10, timePerSet: 25 }, // Multi-label
            { name: "Lunges", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 10, timePerSet: 45 }, // Multi-label
            { name: "Plank", muscleGroup: "core, cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 10, timePerSet: 30 },
            { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 10, timePerSet: 20 },
            { name: "Crunches", muscleGroup: "core, cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 10, timePerSet: 20 },
        ],
        intermediate: [
            { name: "Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 4, reps: 10, rest: 10, timePerSet: 45 }, // Multi-label
            { name: "Pull ups", muscleGroup: "back & biceps, cardio", label: "3, 5", equipment: "Pull-up Bar", sets: 4, reps: 5, rest: 10, timePerSet: 30 }, // Multi-label
            { name: "Dips", muscleGroup: "chest & triceps, cardio", label: "2, 5", equipment: "Dip Bar or Parallel Bars", sets: 4, reps: 8, rest: 10, timePerSet: 30 }, // Multi-label
            { name: "Jump Squats", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 4, reps: 12, rest: 10, timePerSet: 30 }, // Multi-label
            { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 10, timePerSet: 20 }, // Multi-label
            { name: "Kettlebell Swings", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Kettlebell", sets: 4, reps: 15, rest: 10, timePerSet: 30 }, // Multi-label
        ],
        advanced: [
            { name: "Muscle Ups", muscleGroup: "back & biceps, chest & triceps, shoulders, core, cardio", label: "2, 3, 4, 5", equipment: "Pull-up Bar or Rings", sets: 5, reps: 3, rest: 10, timePerSet: 60 }, // Multi-label
            { name: "Pistol Squats", muscleGroup: "legs & back, core, cardio", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: 5, rest: 10, timePerSet: 60 }, // Multi-label
            { name: "Handstand Push ups", muscleGroup: "delts & traps, triceps, core, cardio", label: "2, 4, 5", equipment: "Wall (optional)", sets: 5, reps: 3, rest: 10, timePerSet: 60 }, // Multi-label
            { name: "Box Jumps", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Box", sets: 5, reps: 10, rest: 10, timePerSet: 30 }, // Multi-label
            { name: "Thrusters", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells or Barbell", sets: 5, reps: 10, rest: 10, timePerSet: 45 }, // Multi-label
            { name: "Barbell Complexes", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Barbell", sets: 5, reps: 5, rest: 10, timePerSet: 90 }, // Multi-label
        ],
    },
};



/* ............................................... Function: Normalize Exercises ...................................................... */
function normalizeExercises(exercisesArray) {
    if (!Array.isArray(exercisesArray)) {
        // If it's not an array, assume it's already normalized
        return exercisesArray;
    }
    return exercisesArray.map(exercise => {
        return {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            rest: exercise.rest,
            timePerSet: exercise.timePerSet // Include the new field
        };
    });
}

/* ............................................... Function: Handle Modality Change ...................................................... */

document.getElementById("modality").addEventListener("change", function () {
    const goalSelect = document.getElementById("goal");
    if (this.value === "powerlifting_5x5" || this.value === "hiit" || this.value === "circuit" || this.value === "calisthenics") {
        goalSelect.value = "strength"; // Or any default value you prefer
        goalSelect.disabled = true;
        goalSelect.style.color = "#aaa"; // Gray out the text
        goalSelect.style.backgroundColor = "#eee"; // Gray out the background
    } else {
        goalSelect.disabled = false;
        goalSelect.style.color = ""; // Reset to default color
        goalSelect.style.backgroundColor = ""; // Reset to default background
    }
});

// Disable the copy button initially
document.getElementById("copy-workout").disabled = true;

/* ............................................... Function: Generate Workout ...................................................... */

document.getElementById("generate-workout").addEventListener("click", function () {
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const modality = document.getElementById("modality").value;
    const trainingSplit = document.getElementById("training-split").value; // Get the selected training split
    const resultDiv = document.getElementById("workout-result");
    resultDiv.innerHTML = "";

    let selectedExercises = [];

    if (exercises[modality]) {
        if (exercises[modality][experience]) {
            selectedExercises = normalizeExercises(exercises[modality][experience]);
        } else if (exercises[modality].all) {
            selectedExercises = normalizeExercises(exercises[modality].all);
        } else {
            selectedExercises = normalizeExercises(exercises[modality]);
        }
    } else {
        if (goal && experience && exercises[goal] && exercises[goal][experience]) {
            const levelExercises = exercises[goal][experience];
            for (const key in levelExercises) {
                if (Array.isArray(levelExercises[key])) {
                    selectedExercises = selectedExercises.concat(normalizeExercises(levelExercises[key]));
                }
            }
        } else {
            resultDiv.textContent = "No exercises found for your selected criteria.";
            return;
        }
    }

    if (selectedExercises.length === 0) {
        resultDiv.textContent = "No exercises found for your selected criteria.";
        return;
    }

    const workout = [];
    let availableExercises = [...selectedExercises];

 if (trainingSplit === "full_body") {
        const labeledExercises = {};
        availableExercises.forEach(exercise => {
            if (exercise.label) {
                const labels = exercise.label.split(',').map(label => label.trim());
                labels.forEach(label => {
                    if (!labeledExercises[label]) {
                        labeledExercises[label] = [];
                    }
                    labeledExercises[label].push(exercise);
                });
            }
        });

        const workoutLabels = new Set(); // Keep track of labels already used in the workout
        for (const label in labeledExercises) {
            if (labeledExercises[label].length > 0 && workoutLabels.size < 5) {
                const randomIndex = Math.floor(Math.random() * labeledExercises[label].length);
                const selectedExercise = labeledExercises[label][randomIndex];
                if (!workout.includes(selectedExercise)) { // Avoid duplicates
                    workout.push(selectedExercise);
                    workoutLabels.add(label);
                }
            }
        }

        // Fallback to add more random if available
        while (workout.length < 5 && availableExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            const randomExercise = availableExercises.splice(randomIndex, 1)[0];
            if (!workout.some(ex => ex.name === randomExercise.name)) {
                workout.push(randomExercise);
            }
        }

    } else if (trainingSplit) { // Handle specific splits
        const splitFormatted = trainingSplit.replace("_", " & ").toLowerCase();
        const filteredExercises = availableExercises.filter(exercise => exercise.muscleGroup && exercise.muscleGroup.toLowerCase().includes(splitFormatted));
        while (workout.length < 5 && filteredExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredExercises.length);
            workout.push(filteredExercises.splice(randomIndex, 1)[0]);
        }
    }
    } else {
        // Default: select 5 random exercises
        for (let i = 0; i < 5 && availableExercises.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            workout.push(availableExercises.splice(randomIndex, 1)[0]);
        }
    }

    let totalWorkoutTime = 0;
    let workoutHTML = "<br><center><h3><u>YOUR WORKOUT</u></h3></center><ul>";
    workoutTextForCopy = ""; // Reset workoutTextForCopy here

    workout.forEach(ex => {
        workoutHTML += `<br><br><li><b>${ex.name}</b>`;
        workoutTextForCopy += `${ex.name}`;

        if (ex.sets && ex.reps) {
            workoutHTML += ` - Reps: ${ex.sets}x${ex.reps}`;
            workoutTextForCopy += ` - Reps: ${ex.sets}x${ex.reps}`;
        }

        if (ex.rest) {
            workoutHTML += ` - Rest: ${ex.rest} seconds`;
            workoutTextForCopy += ` - Rest: ${ex.rest} seconds`;
            if (typeof ex.sets === 'number') {
                totalWorkoutTime += (ex.sets - 1) * ex.rest; // Rest between sets
            }
        }

        if (ex.timePerSet !== undefined) {
            workoutHTML += ` - Time per set: ${ex.timePerSet} seconds`;
            workoutTextForCopy += ` - Time per set: ${ex.timePerSet} seconds`;
            if (typeof ex.sets === 'number') {
                let numberOfRounds = ex.sets;
                if (typeof ex.reps === 'string' && (ex.reps.includes('sec') || ex.reps.includes('minutes'))) {
                    numberOfRounds = ex.sets;
                } else if (typeof ex.reps === 'string' && (ex.reps === 'AMRAP' || ex.reps === 'Ladder')) {
                    numberOfRounds = ex.sets;
                } else if (typeof ex.reps === 'number') {
                    numberOfRounds = ex.sets;
                }
                totalWorkoutTime += numberOfRounds * ex.timePerSet;
            }
        }

        workoutTextForCopy += "\n";
    });

    const minutes = Math.round(totalWorkoutTime / 60);
    workoutHTML += `<p><i>Estimated Workout Time: ${minutes} minutes</i></p>`;
    workoutTextForCopy += `Estimated Workout Time: ${minutes} minutes`;

    resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);

    // Enable the copy button after the workout is generated
    document.getElementById("copy-workout").disabled = false;
});

/* ............................................... Function: Validate Workout ...................................................... */

function validateWorkoutText(workoutText) {
    const lines = workoutText.split('\n');
    const errors = [];
    let isValid = true;

    lines.forEach((line, index) => {
        if (line.trim() && !line.includes("Estimated Workout Time")) {
            const exerciseMatch = line.match(/^(.+?) - Reps:/);
            const repsMatch = line.match(/Reps: (.+?)m? - Rest:/);
            const restMatch = line.match(/Rest: (.+?) (seconds?|minutes?)\.?/); // Modified regex

            if (!exerciseMatch) {
                errors.push(`Line ${index + 1}: Exercise name not found.`);
                isValid = false;
            }
            if (!repsMatch) {
                errors.push(`Line ${index + 1}: Reps information not found.`);
                isValid = false;
            }
            if (!restMatch) {
                errors.push(`Line ${index + 1}: Rest information not found.`);
                isValid = false;
            }
        }
    });

    return {
        isValid: isValid,
        errors: errors
    };
}

/* ............................................... Function: Download PDF ...................................................... */
document.getElementById('download-pdf').addEventListener('click', function () {
    let workoutText = document.getElementById('paste-text').value;
    workoutText = DOMPurify.sanitize(workoutText);

    if (!workoutText.trim()) {
        alert("Please paste workout text before downloading.");
        return;
    }

    try {
        const validationResult = validateWorkoutText(workoutText);

        if (!validationResult.isValid) {
            alert("Workout text validation errors:\n" + validationResult.errors.join('\n'));
            return;
        }

        const lines = workoutText.split('\n');
        let tableData = [];
        // Insert "TPS" before "Rest" in the headers
        let headers = ["Exercise", "Reps", "TPS", "Rest", "Set 1", "Set 2", "Set 3", "Set 4", "Set 5", "Set 6", "Set 7", "Set 8"];
        let totalWorkoutTime = 0;

        lines.forEach(line => {
            if (line.trim() && !line.includes("Estimated Workout Time")) {
                const exerciseMatch = line.match(/^(.+?) - Reps:/);
                const repsMatch = line.match(/Reps: (.+?)(?: - Time per set: (.+?) (seconds?|minutes?))?(?: - Rest: (.+?) (seconds?|minutes?))?\s*$/);
                const timePerSetMatch = line.match(/Time per set: (.+?) (seconds?|minutes?)?/);
                const restMatch = line.match(/Rest: (.+?) (seconds?|minutes?)?/);

                if (exerciseMatch) {
                    const exerciseName = exerciseMatch[1].replace(/<b>|<\/b>/g, '').trim();
                    const repsInfo = repsMatch ? repsMatch[1].trim() : "";
                    const tpsInfo = repsMatch && repsMatch[2] ? repsMatch[2].trim() : "";
                    const restInfo = repsMatch && repsMatch[4] ? repsMatch[4].trim() : "";

                    // Add data in the new order
                    tableData.push([exerciseName, repsInfo, tpsInfo, restInfo, "", "", "", "", "", "", "", ""]);
                }
            }
        });

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.autoTable({
            head: [headers],
            body: tableData,
            startY: 10,
            styles: {
                fontSize: 8,
                cellPadding: 2,
                borderColor: [169, 169, 169],
                borderWidth: 1,
            },
            headStyles: {
                fontSize: 8,
                fillColor: [200, 200, 200],
                borderColor: [169, 169, 169],
                borderWidth: 1,
            },
            columnStyles: {
                2: { cellWidth: 'auto' }, // Style for TPS column
                3: { cellWidth: 'auto' }, // Style for Rest column (shifted)
                4: { cellWidth: 'auto' },
                5: { cellWidth: 'auto' },
                6: { cellWidth: 'auto' },
                7: { cellWidth: 'auto' },
                8: { cellWidth: 'auto' },
                9: { cellWidth: 'auto' },
                10: { cellWidth: 'auto' },
                11: { cellWidth: 'auto' },
            },
            tableLineWidth: 1,
            tableBorderColor: [169, 169, 169],
        });

        const tableEndY = doc.autoTable.previous.finalY;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(105, 105, 105);
        const timeLine = lines.find(line => line.includes("Estimated Workout Time"));
        const timeText = timeLine || "";
        doc.text(timeText, 10, tableEndY + 10);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');

        doc.save("workout.pdf");

    } catch (mainError) {
        console.error("Error generating PDF:", mainError);
        console.error("Error stack:", mainError.stack);
        alert("An error occurred while generating the PDF.");
    }
});
/* ............................................... Function: To Populate table ...................................................... */

function populateExerciseTable() {
    console.log("Populating exercise table..."); // Debugging log

    const tableBody = document.getElementById("exercise-table-body");
    if (!tableBody) {
        console.error("Table body element not found.");
        return;
    }
    tableBody.innerHTML = "";

    let allExercises = [];
    let seenExercises = new Set();

    console.log("Number of categories in exercises:", Object.keys(exercises).length); // Check the number of categories

    for (const category in exercises) {
        console.log("Processing category:", category); // Check which category is being processed
        for (const level in exercises[category]) {
            console.log("Processing level:", level); // Check which level is being processed
            for (const type in exercises[category][level]) {
                console.log("Processing type:", type); // Check which type is being processed
                const exerciseList = exercises[category][level][type];
                console.log("Exercise list for this type:", exerciseList); // Check the exercise list

                if (Array.isArray(exerciseList)) {
                    exerciseList.forEach(exercise => {
                        const normalizedName = exercise.name.trim().toLowerCase();
                        if (!seenExercises.has(normalizedName)) {
                            allExercises.push(exercise);
                            seenExercises.add(normalizedName);
                        }
                    });
                } else if (typeof exerciseList === 'object' && exerciseList !== null) { // Handle objects
                    const normalizedName = exerciseList.name.trim().toLowerCase();
                    if (!seenExercises.has(normalizedName)) {
                        allExercises.push(exerciseList);
                        seenExercises.add(normalizedName);
                    }
                } else {
                    console.warn(`Expected an array or object, but found: ${typeof exerciseList} for ${category} > ${level} > ${type}`);
                }
            }
        }
    }

    console.log("Total number of unique exercises found:", allExercises.length); // Check the total number of exercises found

    allExercises.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    allExercises.forEach(exercise => {
        const row = document.createElement("tr");
        const button = document.createElement("button");
        button.className = "copy-exercise";
        let copyText = `${exercise.name} - Reps: ${exercise.sets}x${exercise.reps}`;
        if (exercise.rest) {
            copyText += ` - Rest: ${exercise.rest} seconds.`;
        }
        if (exercise.timePerSet !== undefined) {
            copyText += ` - Time per set: ${exercise.timePerSet} seconds.`;
        }
        button.dataset.exercise = copyText;
        button.textContent = exercise.name;
        const cell1 = document.createElement("td");
        cell1.appendChild(button);

        const cell4 = document.createElement("td");
        cell4.textContent = exercise.sets;

        const cell5 = document.createElement("td");
        cell5.textContent = exercise.reps;

        const cell6 = document.createElement("td");
        cell6.textContent = exercise.rest;

        const cell7 = document.createElement("td");
        cell7.textContent = exercise.timePerSet || ''; // Display time per set

        row.appendChild(cell1);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);

        tableBody.appendChild(row);
    });

    // Attach event listeners after the elements are created
    document.querySelectorAll(".copy-exercise").forEach(button => {
        button.addEventListener("click", function () {
            const textToCopy = this.dataset.exercise;
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.textContent = "Copied!";
                setTimeout(() => this.textContent = this.dataset.exercise.split(" - ")[0], 2000);
            }).catch(err => {
                console.error("Copy failed", err);
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    populateExerciseTable();

    // Set default values on page load
    document.getElementById("goal").value = "muscle";
    document.getElementById("experience").value = "beginner";
    document.getElementById("modality").value = "general";
});

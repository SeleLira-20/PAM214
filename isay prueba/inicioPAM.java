import java.util.Scanner;

public class inicioPAM {

    public void mostrarReglamentoPOO() {
        System.out.println("===== Reglamento POO =====");
        System.out.println("1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.");
        System.out.println("2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de");
        System.out.println("inicio:7:00a.m y 14:00 p.m).");
        System.out.println("3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),");
        System.out.println("justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al");
        System.out.println("tutor para ser validados y de forma posterior emitidos).");
        System.out.println("4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)");
        System.out.println("5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.");
        System.out.println("6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.");
        System.out.println("7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.");
        System.out.println("8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final");
        System.out.println("9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará");
        System.out.println("una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.");
        System.out.println("10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.");
        System.out.println("11. Prohibido el uso de audífonos durante la clase.");
        System.out.println("12. Prohibido comer y/o tomar líquidos en el salón.");
        System.out.println("13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.");
        System.out.println("14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación");
        System.out.println("de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)");
        System.out.println("15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.");
        System.out.println("16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación");
        System.out.println("17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el");
        System.out.println("50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.");
    }

    public void mostrarLineamientosClassroom() {
        System.out.println("===== Lineamientos Classroom =====");
        System.out.println("1.Entregar los trabajos para su revisión.");
        System.out.println("2. Entregas en PDF");
        System.out.println("3.Aviso de clase");
        System.out.println("4. Entregas autorizadas con retraso, 5 calif Max");
    }

    public void mostrarFechasParciales() {
        System.out.println("===== Fechas de Parciales =====");
        System.out.println("1er Parcial: 01-10-25");
        System.out.println("2do Parcial: 05-10-25");
        System.out.println("3er Parcial: 03-12-25");
        System.out.println("Examen final: 08-12-25");
        
    }

    public void mostrarPorcentajes() {
        System.out.println("===== Porcentajes por Parcial =====");
        System.out.println("parcial 1: conocimiento 40%, desempeño: 20%, producto: 30%, Proyecto integrador: 10%,");
        System.out.println("parcial 2: conociminto: 40, desempeño: 20%, producto: 20%, proyecto integrador: 20%,");
        System.out.println("parcial 3: conoocimiento: 20%, desempeño: 10%, producto:40%, proyecto integrador: 30%");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        inicioPAM pam = new inicioPAM();
        int opcion;

        do {
            System.out.println("\n===== MENÚ INICIO PAM =====");
            System.out.println("1. Ver Reglamento POO");
            System.out.println("2. Ver Lineamientos Classroom");
            System.out.println("3. Ver Fechas de Parciales");
            System.out.println("4. Ver Porcentajes por Parcial");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    pam.mostrarReglamentoPOO();
                    break;
                case 2:
                    pam.mostrarLineamientosClassroom();
                    break;
                case 3:
                    pam.mostrarFechasParciales();
                    break;
                case 4:
                    pam.mostrarPorcentajes();
                    break;
                case 0:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opción no válida. Intente nuevamente.");
            }
        } while (opcion != 0);

        scanner.close();
    }
}

import "./Form"
import Form from "./Form";
// eslint-disable-next-line no-unused-vars
function Lista() {
    return (
    <section className="section_task">
        {Lista.length === 0 ? (
    <p>No hay tareas aun...</p>
        ) : (
    <div className="task_container">
            {Lista.map(({ id, title, description }, index) => {
            return (
                <Form
                key={index}
                id={id}
                title={title}
                description={description}
                  // eslint-disable-next-line no-undef
                deleteTask={deleteList}
                />
            );
            })}
        </div>
        )}
    </section>
    );
}

// eslint-disable-next-line no-undef
export default List;
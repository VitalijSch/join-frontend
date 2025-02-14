import { useNavigate } from 'react-router-dom';
import './../../features/home/styles/Help.css'

function Help() {
    const navigate = useNavigate();

    return (
        <div className="help">
            <div className="help__flex-arrow">
                <div onClick={() => navigate(-1)} className="help__arrow-container">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.93725 8.66673H19.8333C20.5696 8.66673 21.1666 9.26368 21.1666 10.0001C21.1666 10.7364 20.5696 11.3334 19.8333 11.3334H4.93725L11.1466 17.5427C11.6672 18.0634 11.6672 18.9074 11.1466 19.4281C10.626 19.9487 9.78187 19.9487 9.26125 19.4281L1.24746 11.4143C0.466415 10.6332 0.466417 9.3669 1.24747 8.58585L9.26125 0.57206C9.78187 0.0514398 10.626 0.0514406 11.1466 0.572061C11.6672 1.09268 11.6672 1.93677 11.1466 2.45739L4.93725 8.66673Z"
                            fill="#29ABE2" />
                    </svg>
                </div>
            </div>
            <h1>Help</h1>
            <br />
            <span>
                Welcome to the help page for <span className="help__join-color">Join</span>, your guide to using our kanban
                project management tool. Here, we'll provide an overview of what <span className="help__join-color">Join</span>
                is, how it can benefit you, and how to use it.
            </span>
            <br />
            <br />
            <h2>What is Join?</h2>
            <br />
            <span><span className="help__join-color">Join</span> is a kanban-based project management tool designed and built by a
                group of dedicated students as part of their web development bootcamp at
                the Developer Akademie.</span>
            <br />
            <br />
            <span>
                Kanban, a Japanese term meaning "billboard", is a highly effective
                method to visualize work, limit work-in-progress, and maximize
                efficiency (or flow). <span className="help__join-color">Join</span> leverages the principles of kanban to help
                users manage their tasks and projects in an intuitive, visual interface.
            </span>
            <br />
            <br />
            <span>It is important to note that <span className="help__join-color">Join</span> is designed as an educational
                exercise and is not intended for extensive business usage. While we
                strive to ensure the best possible user experience, we cannot guarantee
                consistent availability, reliability, accuracy, or other aspects of
                quality regarding <span className="help__join-color">Join</span>.
            </span>
            <br />
            <br />
            <h2>How to use it</h2>
            <br />
            <p>Here is a step-by-step guide on how to use <span className="help__join-color">Join</span>:</p>
            <br />
            <div className="help__flex-container">
                <h2>1.</h2>
                <div>
                    <h2>Exploring the Board</h2>
                    <span>When you log in to <span className="help__join-color">Join</span>, you'll find a default board. This board
                        represents your project and contains four default lists: "To Do",
                        "In Progress", "Await feedback", and "Done".</span>
                </div>
            </div>
            <div className="help__flex-container">
                <h2>2.</h2>
                <div>
                    <h2>Creating Contacts</h2>
                    <span>In <span className="help__join-color">Join</span>, you can add contacts to collaborate on your projects. Go to
                        the
                        "Contacts" section, click on "New contact", and fill in the required
                        information. Once added, these contacts can be assigned tasks and they
                        can interact with the tasks on the board.</span>
                </div>
            </div>
            <div className="help__flex-container">
                <h2>3.</h2>
                <div>
                    <h2>Adding Cards</h2>
                    <span>Now that you've added your contacts, you can start adding cards. Cards
                        represent individual tasks. Click the "+" button under the appropriate
                        list to create a new card. Fill in the task details in the card, like
                        task name, description, due date, assignees, etc.</span>
                </div>
            </div>
            <div className="help__flex-container">
                <h2>4.</h2>
                <div>
                    <h2>Moving Cards</h2>
                    <span> As the task moves from one stage to another, you can reflect that on the
                        board by dragging and dropping the card from one list to another.</span>
                </div>
            </div>
            <div className="help__flex-container">
                <h2>5.</h2>
                <div>
                    <h2>Deleting Cards</h2>
                    <span>Once a task is completed, you can either move it to the "Done" list or
                        delete it. Deleting a card will permanently remove it from the board.
                        Please exercise caution when deleting cards, as this action is
                        irreversible.</span>
                </div>
            </div>
            <p className="help__margin-left">
                Remember that using <span className="help__join-color">Join</span> effectively requires consistent updates from
                you and your team to ensure the board reflects the current state of your
                project.
            </p>
            <br /><br />
            <p className="help__margin-left">
                Have more questions about <span className="help__join-color">Join</span>? Feel free to contact us at [Your Contact
                Email]. We're here to help you!
            </p>
            <br /><br />
            <h2>Enjoy using Join!</h2>
        </div>
    )
}

export default Help
import React from 'react'
import '../css/box.css'
import io from 'socket.io-client'

export default function Chat() {
    const socket = io.connect('http://localhost:3006')
    const sendSMSHandler = () => {
        console.log(document.getElementById('inputText').value)
        var newItem = document.createElement('div');
        newItem.className += " bubble bubble-dark";
        newItem.textContent = document.getElementById('inputText').value;
        document.querySelector(".message.message-right").appendChild(newItem);
        socket.emit('message',document.getElementById('inputText').value);
        document.getElementById('inputText').value = ''
    }
    return (
        <div>
            <div className="chat-box">
                <div className="header">
                    <div className="avatar-wrapper avatar-big">
                        <img src="https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2020_03_23/i13863960814_1.jpg" alt="avatar" />
                    </div>
                    <span className="name">Crush</span>
                    <span className="options">
                        <i className="fas fa-ellipsis-h"></i>
                    </span>
                </div>
                <div className="chat-room">
                    <div className="message message-left">
                        <div className="avatar-wrapper avatar-small">
                            <img src="https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2020_03_23/i13863960814_1.jpg" alt="avatar" />
                        </div>
                        <div className="bubble bubble-light">
                            Hey anhat!
      </div>
                    </div>
                    <div className="message message-right">
                        <div className="avatar-wrapper avatar-small">
                            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/87853049_2481558942096235_8369025410146500608_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=0dU4W6nYBk0AX-ZHz-P&_nc_ht=scontent-xsp1-1.xx&_nc_tp=7&oh=20d12357dd09465c5ed2526555651580&oe=5EA2FF44" alt="avatar" />
                        </div>
                        <div className="bubble bubble-dark">
                            what is going on?
      </div>
                    </div>
                </div>
                <div className="type-area">
                    <div className="input-wrapper">
                        <input type="text" id="inputText" placeholder="Type messages here..." />
                    </div>
                    <span className="button-add">
                        <i className="fas fa-plus-circle"></i>
                        <div className="others">
                            <span className="emoji-button">
                                <i className="far fa-laugh"></i>
                                <div className="emoji-box">
                                    <span>&#x1f604;</span>
                                    <span>😀</span>
                                    <span>😂</span>
                                    <span>😭</span>
                                    <span>😍</span>
                                    <span>🤮</span>
                                    <span>🤑</span>
                                    <span>😖</span>
                                    <span>😷</span>
                                </div>
                            </span>
                            <span className="image-button">
                                <i className="far fa-image"></i>
                            </span>
                            <span>
                                <i className="fas fa-paperclip"></i>
                            </span>
                        </div>
                    </span>
                    <button className="button-send" onClick={sendSMSHandler}>Send</button>
                </div>

            </div>
        </div>
    )
}

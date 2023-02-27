import React, { useState } from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Loading,
} from "@nextui-org/react";
import { Mail } from "../Icons/Mail";
import { Password } from "../Icons/Password";
import { validateEmail, validatePassword } from "../../utils";

export default function SignIn({ login, register, loading, error }) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = () => {
    const v_email = validateEmail(email);
    const v_password = validatePassword(password);
    if (v_email && v_password) {
      login(email, password);
    }
  };
  const registerHandler = () => {
    const v_email = validateEmail(email);
    const v_password = validatePassword(password);
    if (v_email && v_password) {
      register(email, password);
    }
  };

  return (
    <div>
      <Button auto shadow onPress={handler}>
        Sign In
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-sign-in"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-sign-in" size={18}>
            Welcome to
            <Text
              b
              size={18}
              css={{
                padding: 5,
              }}
            >
              Bandwise
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          {loading && <Loading />}
          <Input
            value={email}
            onChange={onChangeEmail}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            aria-labelledby="modal-sign-in"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            aria-labelledby="modal-sign-in"
            contentLeft={<Password fill="currentColor" />}
          />
          {error && <Text color="error">{error}</Text>}
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onPress={closeHandler}
            disabled={loading}
            aria-label="Close"
          >
            Close
          </Button>
          <Button
            flat
            color="secondary"
            auto
            onPress={registerHandler}
            disabled={loading}
          >
            Sign up
          </Button>
          <Button auto onPress={loginHandler} disabled={loading}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Avatar, Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FiEdit} from "react-icons/fi";

export function UpdateProfile() {
    const onSubmit = async(e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        //   console.log(name,image);
        await authClient.updateUser({
            name,
            image
        })

    }
  return (
    <Modal>
      <Button variant="secondary" className={"bg-blue-300"}> <FiEdit /> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div  className="flex justify-center items-center gap-5 p-5 text-blue-500">
                <Avatar><FiEdit /></Avatar>
              <Modal.Heading className="text-center text-blue-500">Edit Your Profile</Modal.Heading>
              </div>
            
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="image" type="url">
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your image url" />
                  </TextField>

                 <div className="flex  justify-center gap-5"> 
                    <Button slot="close" variant="secondary">
                  Cancel
                </Button>
              <Button type="submit" slot="close">Update</Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
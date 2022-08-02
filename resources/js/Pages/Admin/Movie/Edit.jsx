import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie : {movie.name}</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label className="mt-4">Name</Label>
                <Input
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.name}
                />
                <Label className="mt-4">Category</Label>
                <Input
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.category}
                />
                <Label className="mt-4">Video URL</Label>
                <Input
                    type="text"
                    name="video_url"
                    defaultValue={movie.video_url}
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.video_url}
                />
                <Label className="mt-4">Thumbnail</Label>
                <img src={`/storage/${movie.thumbnail}`} className="w-40" />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert thumbnail of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.thumbnail}
                />
                <Label className="mt-4">Rating</Label>
                <Input
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    variant="primary-outline"
                    placeholder="Enter the rating of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <Label className="mt-1 mr-3">Is Featured</Label>
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <Button type="submit" className=" mt-4" processing={processing}>
                    Update
                </Button>
            </form>
        </Authenticated>
    );
}

export default Edit;

import styles from './Uploader.module.scss';


interface UploaderProps {
    updateFileList: (files: FileList) => void,
    deleteImg: (fileName: string) => void,
    files: File[]
}

export default function Uploader({ updateFileList, deleteImg, files }: UploaderProps) {






    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();

        let dt = e.dataTransfer;
        let files = dt.files;
        updateFileList(files);
    }






    return (
        <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={styles.dropzone}

        >
            drop your files here
            {files.length > 0 && <><p>your files</p> 
            <section className={styles.imgList }>
                {files.map((file, index) =>
                    <figure key={index}>
                        <img  src={URL.createObjectURL(file)} />
                        <button onClick={() => deleteImg(file.name) } type='button' >delete</button>
                    </figure>
                )
                }
                </section>
                </>
                }

            

        </div>


    );
}



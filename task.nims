import std/strformat , os, strutils

proc checkFileStuff(out_dir, input_file:string) =
    let out_path = out_dir.split(r"/")[0..^2].join(r"/")
    if not out_path.dirExists:
        echo "out_dir at : " & "'" & out_path & "' " & "does not exist"
        quit(1)
    
    let out_file_name = out_dir.split(r"/")[^1]
    if not(".js" in out_file_name):
        echo "out_dir at : " & "'" & out_path & "' " & "does not end with .js"
        quit(1)
    
    if not(".nim" in input_file):
        echo "input_file at : " & "'" & input_file & "' " & "does not end with .nim"
        quit(1)

task dev, "Start server in dev mode":
    exec "nim c -r -d:ic -d:ssl -d:dev  -d:last_open_chapter=0 app.nim"

task demo, "Run demo":
    exec """nim c \
            -r \
            -d:demo \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:lto \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task prod, "Start server in prod mode":
    exec """nim c \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:lto \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task prodr, "Start server in prod mode":
    exec """nim c \
            -r \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:lto \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task mkfe, "build frontends":
    proc buildExecCommand(input_file: string, out_dir: string): string = 
        checkFileStuff(out_dir, input_file)

        return fmt"""nim js -b:js -d:dev -d:ic -o:{out_dir} {input_file}"""

    #exec buildExecCommand("./cgpt_page_fe.nim"         , fmt"./static/js/cgpt_page_fe.js"        )
    #exec buildExecCommand("./nav_fe.nim"               , fmt"./static/js/nav_fe.js"              )
    exec buildExecCommand("./landing_page_fe.nim"      , fmt"./static/js/landing_page_fe.js"     )
    exec buildExecCommand("./contribute_page_fe.nim"   , fmt"./static/js/contribute_page_fe.js"  )

task build_tw, "Builds Thirdweb":
    when defined(linus):
        withDir "/root/wef/static/js/thirdweb":
            exec "npm run build"
    when defined(windows):
        withDir r"B:\Desktop\Scripts\projects\WEF\static\js\thirdweb":
            exec "npm run build"